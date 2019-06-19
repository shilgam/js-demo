def login(opts)
  within '.form-signin' do
    fill_in 'user_email', with: opts[:email]
    fill_in 'Password', with: opts[:password]
    click_button 'LOG IN'
  end
end
