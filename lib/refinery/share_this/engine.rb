module Refinery
  module ShareThis
    class Engine < ::Rails::Engine
      engine_name :refinery_share_this

      initializer 'register refinery_share_this plugin' do
        ::Refinery::Plugin.register do |plugin|
          plugin.name = 'share_this'
          plugin.hide_from_menu = true
          plugin.always_allow_access = true
          plugin.pathname = root
        end
      end

      initializer 'register refinery_share_this javascripts' do
        Refinery::Core.config.register_javascript('refinery/share_this.min.js')
      end

    end
  end
end

