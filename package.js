Package.describe({
  summary: "Login service for Smartsheet accounts",
  version: "1.0.0",
  name: "smartsheet:meteor-accounts-smartsheet",
  git: "https://github.com/smartsheet-platform/meteor-accounts-smartsheet.git"
});

Package.on_use(function(api) {
  api.use(['underscore', 'random']);
  api.use('accounts-base', ['client', 'server']);
  // Export Accounts (etc) to packages using this one.
  api.imply('accounts-base', ['client', 'server']);
  api.use('accounts-oauth', ['client', 'server']);
  api.use('smartsheet:meteor-smartsheet@1.0.0', ['client', 'server']);

  api.add_files('smartsheet_login_button.css', 'client');
  api.add_files("smartsheet.js");
});
