module Refinery
  class ShareThisGenerator < Rails::Generators::Base

    source_root File.expand_path('../templates', __FILE__)

    def generate_share_this_initializer
      template 'config/initializers/refinery/share_this.rb.erb', File.join(destination_root, 'config', 'initializers', 'refinery', 'share_this.rb')
    end

  end
end
