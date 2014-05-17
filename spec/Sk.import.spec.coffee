describe "Sk.import", ->

  beforeEach () ->
    Sk.currLineNo = 12345
    Sk.configure
      "output": (text) ->
        window.alert(text)
      "debugout": (arg) ->
        console.log "#{JSON.stringify(arg, null, 2)}"
      "read": (searchPath) ->
        if Sk.builtinFiles is undefined or Sk.builtinFiles["files"][searchPath] is undefined
          throw new Error("File not found: '#{searchPath}'")
        else
          return Sk.builtinFiles["files"][searchPath]

  describe "MainWithBody", ->
    it "should work without a callback", ->
      module = Sk.importMainWithBody("<stdin>", false, "x = 23\n")

      x = Sk.ffi.gattr(module, 'x')

      expect(Sk.ffi.getType(x)).toBe Sk.ffi.PyType.INT
      expect(Sk.ffi.remapToJs(x)).toBe 23
      
