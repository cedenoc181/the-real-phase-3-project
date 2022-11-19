require 'rest-client'

class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  get '/' do
    "hello world"
  end

  # Add your routes here
  get "/companies" do
    companies = Company.all
    companies.to_json
  end

  get '/companies/:id' do
    comp = Company.find(params[:id])
    comp.to_json
  end

  get "/investors" do
    investors = Investor.all
    investors.to_json
  end

  get "/shares" do
    shares = Share.all
    shares.to_json
  end

  get '/shares/:id' do
    share = Share.id
    share.to_json
  end

  post '/companies' do
    new_company = Company.create(
      name: params[:name],
      price: params[:price],
      ticker: params[:stock_ticker]
    )
    new_company.to_json
  end

  get "/companies/by_price" do
    company_price = Company.by_price
    company_price.to_json
  end

  get "/companies/most_expensive" do
    company_max= Company.most_expensive
    company_max.to_json
  end

  get "/companies/least_expensive" do
    company_min= Company.most_expensive
    company_min.to_json
  end

  post '/investors/:id' do
  investor_add = Investor.find(params[:id])
  investor_add.create(
     name: params[:name]
    )
  investor_add.to_json
  end


  patch '/investors/:id' do
    investor_edit = Investor.find(params[:id])
    investor_edit.update(
       name: params[:name],
      )
    investor_edit.to_json
    end


    delete '/investors/:id' do
      d_inv = Investor.find(params[:id])
      d_inv.destroy
      d_inv.to_json
    end
end
