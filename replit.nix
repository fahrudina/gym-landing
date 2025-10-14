language = "nodejs"
run = "npm start"

[nix]
channel = "stable-21_11"

[env]
XDG_CONFIG_HOME = "/home/runner/.config"
PATH = "/home/runner/$REPL_SLUG/.config/npm/node_global/bin:/home/runner/$REPL_SLUG/node_modules/.bin"
npm_config_prefix = "/home/runner/$REPL_SLUG/.config/npm/node_global"

[gitHubImport]
requiredFiles = [".replit", "replit.nix", ".config"]

[packager]
language = "nodejs"

  [packager.features]
  packageSearch = true
  guessImports = true
  enabledForHosting = false

[unitTest]
language = "nodejs"

[debugger]
support = true

  [debugger.interactive]
  transport = "localhost:0"
  startCommand = ["dap-node"]

    [debugger.interactive.initializeMessage]
    command = "initialize"
    type = "request"

    [debugger.interactive.launchMessage]
    command = "launch"
    type = "request"
    
      [debugger.interactive.launchMessage.arguments]
      pauseForSourceMap = false
      args = []
      cwd = "."
      environment = []
      program = "."
      request = "launch"
      type = "pwa-node"
      sourceMaps = true
      skipFiles = ["<node_internals>/**"]
      console = "externalTerminal"