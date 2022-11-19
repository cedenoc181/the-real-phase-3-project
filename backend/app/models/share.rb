class Share < ActiveRecord::Base
    belongs_to :company
    belongs_to :investor

    # def bought_shares(investor, comapny, quantity)
    #     Shares.create(investor: investor, company: company, quantity: quantity  )
    # end 

    def share_info
        "#{self.investor.name} buys #{quantity} of Shares from #{self.company.name} at #{self.company.price}."
    end
 
end
