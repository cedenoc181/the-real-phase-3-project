class CreateShares < ActiveRecord::Migration[6.1]
  def change
    create_table :shares do |t|
      t.integer :investor_id
      t.integer :company_id
      t.integer :quantity
    end
  end
end
