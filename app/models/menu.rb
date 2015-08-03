class Menu < ActiveRecord::Base
  # attr_accessible :dish, :price

  def self.search(search)
    if search
      where('dish LIKE ?', "%#{search}%")
    else
      all
    end
  end
end
