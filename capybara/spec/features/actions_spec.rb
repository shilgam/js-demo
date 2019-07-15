require 'spec_helper'

describe 'Capybara' do

  before do
    visit '/commands/actions'
  end

  it 'type into a DOM element' do
    fill_in 'email1', with: 'fake@email.com'
    expect(page).to have_field('email1', with: 'fake@email.com')
  end

  it 'emulate mouse hover' do
    find('button#custom_btn').hover
    btn_color = find('button#custom_btn').native.css_value('background-color')
    expected_color_on_hover = 'rgba(201, 48, 44, 1)'
    expect(btn_color).to eq(expected_color_on_hover)
  end
end
