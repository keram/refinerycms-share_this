module Refinery
  module ShareThis
    include ActiveSupport::Configurable

    config_accessor :publisher, :doNotHash, :doNotCopy, :switchTo5x,
                    :hashAddressBar, :buttons, :button_type, :namespaces

    self.buttons = {
      sharethis: 'ShareThis',
      facebook: 'Facebook',
      twitter: 'Tweet',
      googleplus: 'Google +',
      linkedin: 'LinkedIn',
      pinterest: 'Pinterest',
      delicious: 'Delicious',
      identi: 'identi.ca',
      email: 'Email'
    }

    self.publisher = ''
    self.doNotHash = false
    self.doNotCopy = false
    self.hashAddressBar = false
    self.switchTo5x = false
    self.button_type = 'vcount'

    self.namespaces = {}
  end
end
