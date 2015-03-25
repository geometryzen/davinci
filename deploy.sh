if [[ "$TRAVIS_PULL_REQUEST" == "false" && "$TRAVIS_TEST_RESULT" == "0" ]]; then

  echo -e "Starting deployment to distribution.\n"
  # configure Git to commit as Travis
  git config --global user.email "travis@travis-ci.org"
  git config --global user.name "Travis"

  cd $HOME

  # clone davinci-dev
  git clone --quiet https://${GH_TOKEN}@github.com/geometryzen/davinci-dev.git davinci-dev
  # clone davinci
  git clone --quiet https://${GH_TOKEN}@github.com/geometryzen/davinci.git     davinci
  
  # compare tags
  cd $HOME
  cd davinci-dev
  git tag > ../tags-davinci-dev

  cd $HOME
  cd davinci
  git tag > ../tags-davinci
  cd ..
  
  # compare two files per line.
  # -F, --fixed-strings
  #              Interpret PATTERN as a list of fixed strings, separated by newlines, any of which is to be matched.
  # -x, --line-regexp
  #              Select only those matches that exactly match the whole line.
  # -v, --invert-match
  #              Invert the sense of matching, to select non-matching lines.
  # -f FILE, --file=FILE
  #              Obtain patterns from FILE, one per line. The empty file contains zero patterns, and therefore matches nothing.
  grep -Fxvf tags-davinci tags-davinci-dev > new-tags
  
  for TAG in $(cut -d, -f2 < new-tags)
  do
    echo "Found new tag: $TAG"
    # we have a new tag
    export NEWTAG=true
    # build davinci at this tag
    cd $HOME/davinci-dev
    git checkout tags/$TAG
    npm install jscs
    npm install git://github.com/jshint/jshint/
    ./build.py dist -u
    # create zip and tarbals
    cd dist
    tar -czf davinci-latest.tar.gz *.js
    zip davinci-latest.zip *.js
    mkdir -p ../doc/static/dist
    mv *.zip ../doc/static/dist/
    mv *.tar.gz ../doc/static/dist/
    # update davinci for the site.
    cp davinci.min.js ../doc/static/
    cp davinci-stdlib.js ../doc/static/
    cp *.js ../../davinci/
    cd ..
    cp bower.json ../davinci
    cp .bowerrc ../davinci
    # put the new version in the distribution repository
    cd $HOME/davinci
    git add .
    git commit -m "DaVinci version: $TAG"
    git tag $TAG
    git push -fq --tags origin master > /dev/null
  done

  # reset davinci distribution repository to HEAD just to be sure
  cd $HOME/davinci
  git reset HEAD --hard

  # build DaVinci
  cd $HOME/davinci-dev
  git reset HEAD --hard

  ./build.py dist -u

  cd dist
  cp *.js ../../davinci/

  cd ..
  cp bower.json ../davinci
  cp .bowerrc ../davinci

  # add, commit and push files to the distribution repository
  cd $HOME
  cd davinci
  git add .
  git commit -m "Travis build $TRAVIS_BUILD_NUMBER pushed"
  git push -fq origin master > /dev/null

  echo -e "Deployment successful.\n"
else
  echo -e "Deployment skipped because TRAVIS_PULL_REQUEST = $TRAVIS_PULL_REQUEST and TRAVIS_TEST_RESULT = $TRAVIS_TEST_RESULT"
fi
