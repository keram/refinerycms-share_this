module Refinery
  module ShareThis
    class Engine < ::Rails::Engine
      engine_name :refinery_share_this

      initializer 'register refinery_share_this javascripts' do
        Refinery::Core.config.register_javascript('refinery/share_this/share_this.min.js')
      end

    end
  end
end

