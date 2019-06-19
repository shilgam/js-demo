require 'spec_helper'

describe 'Capybara features' do
  it 'Sign in' do
    visit '/'
    expect(page).to have_css('.form-signin')

    within '.form-signin' do
      fill_in 'user_email', with: ENV['APP_USERNAME']
      fill_in 'Password', with: ENV['APP_PASSWORD']
      click_button 'LOG IN'
    end

    expect(page).to have_content('Signed in successfully.')
  end
end
