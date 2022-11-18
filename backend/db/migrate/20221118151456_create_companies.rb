class CreateCompanies < ActiveRecord::Migration[6.1]
  def change
    create_table :companies do |t|
      t.string :stock_ticker
      t.string :name
      t.float :price
    end
  end
end
