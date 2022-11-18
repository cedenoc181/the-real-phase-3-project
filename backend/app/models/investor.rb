class Investor < ActiveRecord::Base
    has_many :shares
    has_many :companies, through: :shares

end
