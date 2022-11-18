class Share < ActiveRecord::Base
    belongs_to :company
    belongs_to :investor
end
