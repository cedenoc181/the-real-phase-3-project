class Company < ActiveRecord::Base
    has_many :shares
    has_many :investors, through: :shares
end
