require 'sinatra'

get '/*' do
  File.read "#{Dir.pwd}/public/index.html"
end