require 'active_record/fixtures'

class CleanupController < ApplicationController
  def destroy
    tables = ActiveRecord::Base.connection.tables
    tables.delete 'schema_migrations'
    tables.each { |t| ActiveRecord::Base.connection.execute("TRUNCATE #{t} CASCADE") }
    # ActiveRecord::FixtureSet.create_fixtures(Rails.root.join('spec', 'fixtures'), 'users')
    
    render text: 'Truncated tables and seeded'
  end
end