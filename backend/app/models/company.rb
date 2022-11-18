class Company < ActiveRecord::Base
    has_many :shares
    has_many :investors, through: :shares


    def self.by_price
        self.all.order(price: :desc)
    end

    def self.most_expensive
        binding.pry
        self.all.max_by {|stock| stock.price}
    end

    def self.least_expensive
        binding.pry
        self.all.min_by {|stock| stock.price}
    end

    def company_coming_soon(name, stock_ticker)
        Company.create(name: name, stock_ticker:stock_ticker)
    end

end
