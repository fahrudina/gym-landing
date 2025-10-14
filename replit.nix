{ pkgs }: {
  deps = [
    pkgs.nodejs-18_x
    pkgs.nodePackages.npm
    pkgs.nodePackages.yarn
  ];
}

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