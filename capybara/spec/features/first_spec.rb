require 'spec_helper'

describe 'Capybara' do
  it 'displays tooltips on hover action' do
    visit '/'
    expect(page).to have_css('.form-signin')

    login({ email: ENV['APP_USERNAME'], password: ENV['APP_PASSWORD'] })
    expect(page).to have_content('Signed in successfully.')

    visit '/campaigns/1141'

    within '.lci-sidemenu' do
      within '.dimension-item.ad' do
        find('.list-group-item__label', text: 'Ad').click
      end
    end

    fill_in 'overlay-search', with: 'VR Raw Visits < 200. All Weeks'
    find('.item-name').click # needed for headless mode
    find('.item-name').hover
    expect(page).to have_content('This dimension has not met minimum reporting standards to be displayed.')
  end
end
