require 'rest-client'
puts "🌱 Seeding spices..."

# Seed your database here
def get_companies 
    companies = RestClient.get("https://financialmodelingprep.com/api/v3/stock-screener?marketCapMoreThan=1000000000&betaMoreThan=1&volumeMoreThan=10000&sector=Technology&exchange=NASDAQ&dividendMoreThan=0&limit=100&apikey=345d03e54402c34a9096c537f3b36196")
    companies_hash = JSON.parse(companies)
    companies_hash[0]["symbol"].each do |company|
        Company.find_or_create_by(stock_ticker: company)
    end 
end

Company.all.each do |company|
    response = RestClient.get("https://financialmodelingprep.com/api/v3/profile/#{company.stock_ticker}?apikey=345d03e54402c34a9096c537f3b36196")
    companies_hash = JSON.parse(response)
    companies_hash.each do |company|
        company.create (
            company["companyName"]
            # company[price] 
            )
    end
    print "."
end 

get_companies
