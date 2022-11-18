class Investor < ActiveRecord::Base
    has_many :shares
    has_many :companies, through: :shares



    def self.delete_investor(id)
        Investor.find_by(id: id).destroy
        end 
        
        def self.new_investor(name)
        Investor.create(name: name)
        end
        
        def update_all_values(name)
        self.update(name: name)
        save
        end

        def bought_shares(investor, company, quantity)
            Share.create(investor: investor, company: company, quantity: quantity)
        end 

    end

