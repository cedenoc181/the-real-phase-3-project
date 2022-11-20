require 'net/http'
require 'open-uri'
require 'json'
 
class GetData
# 

# def stock_key
#     key = ENV["STOCK_DB_API_KEY"]
#     key_url = "https://financialmodelingprep.com/api/v3/stock-screener?marketCapMoreThan=1000000000&betaMoreThan=1&volumeMoreThan=10000&sector=Technology&exchange=NASDAQ&dividendMoreThan=0&limit=600"
#     res = HTTParty.get(key_url, :headers => {"Authorization" => "Bearer #{key}", "x-requested-with" => "XMLHttpRequest"})
#      render plain: res.body.squish
#  end




#use this api https://financialmodelingprep.com/api/v3/stock-screener?marketCapMoreThan=1000000000&betaMoreThan=1&volumeMoreThan=10000&sector=Technology&exchange=NASDAQ&dividendMoreThan=0&limit=100&apikey=345d03e54402c34a9096c537f3b36196
  URL = "https://financialmodelingprep.com/api/v3/stock-screener?marketCapMoreThan=1000000000&betaMoreThan=1&volumeMoreThan=10000&sector=Technology&exchange=NASDAQ&dividendMoreThan=0&limit=600&apikey=345d03e54402c34a9096c537f3b36196"
  def get_response_body
    uri = URI.parse(URL)
    response = Net::HTTP.get_response(uri)
    response.body
  end 

  def parse_json
    # we use the JSON library to parse the API response into nicely formatted JSON
      stockData = JSON.parse(self.get_response_body)
      stockData.collect do |stock|
        stock
      end
    end

end
stockData = GetData.new
puts "🌱 Seeding stocks..." 
stockData.parse_json.map do |stock|
p "stock_tiker: #{stock['symbol']} | name: #{stock['companyName']} | price: #{stock['price']} "
Company.create(
    stock_ticker: stock['symbol'], 
    name: stock['companyName'], 
    price: stock['price'], 
    sector: stock['sector'],
    industry: stock['industry'],
    exchangeShortName: stock['exchangeShortName'],
    isActivelyTrading: stock['isActivelyTrading'],
    marketCap: stock['marketCap'],
    beta: stock['beta'],
    volume: stock['volume']
)


end

puts "🌱 Seeding companies"
# 100.times do 
# Company.create(stock_ticker: stock['symbol'], companyName: stock['companyName'], price: stock['price'] )

# end 




end


puts "🌱 Seeding spices..." 

# Seed your database here


  


