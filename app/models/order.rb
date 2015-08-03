class Order < ActiveRecord::Base

  # validates :terms_of_service, acceptance: { accept: 'yes' }
  validates :name, presence: true, :uniqueness => true, length: { maximum: 40 }
  validates :item, presence: true, length: { maximum:30 }
  validates :item, format: { with: /\A[a-z\d\s]*\Z/i, :message => 'ordered must only be one!!' }

end
