require 'spec_helper'

describe "Capybara features" do
  it "Fake rspec test" do
    visit '/'
    expect(page).to have_css('.form-signin')
  end
end
