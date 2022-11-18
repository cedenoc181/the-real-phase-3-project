# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_11_18_151456) do

  create_table "companies", force: :cascade do |t|
    t.string "stock_ticker"
    t.string "name"
    t.float "price"
  end

  create_table "investors", force: :cascade do |t|
    t.string "name"
  end

  create_table "shares", force: :cascade do |t|
    t.integer "investor_id"
    t.integer "company_id"
    t.integer "quantity"
  end

end
