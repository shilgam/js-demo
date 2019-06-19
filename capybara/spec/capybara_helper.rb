require 'capybara/rspec'
require 'selenium-webdriver'

def setup_capybara
  options = {
    'args' => [
      '--no-default-browser-check',
      '--start-maximized'
    ]
  }

  # launch chrome in headless mode if $HEADLESS env var specified
  options['args'].push('--headless') if ENV['HEADLESS']

  capabilities = Selenium::WebDriver::Remote::Capabilities.chrome(
    'goog:chromeOptions' => options
  )

  Capybara.register_driver :selenium do |app|
    Capybara::Selenium::Driver.new(
      app,
      browser: :remote,
      url: "http://#{ENV['SELENIUM_HOST']}:#{ENV['SELENIUM_PORT']}/wd/hub",
      desired_capabilities: capabilities
    )
  end

  Capybara.configure do |config|
    config.app_host = ENV['APP_HOST']
    config.default_driver = :selenium
    config.javascript_driver = :chrome
    config.run_server = false
  end
end
