module Refinery
  autoload :ShareThisGenerator, 'generators/refinery/share_this_generator'

  module ShareThis
    require 'refinery/share_this/engine'
    require 'refinery/share_this/configuration'

    autoload :Version, 'refinery/share_this/version'

    class << self
      attr_writer :root

      def root
        @root ||= Pathname.new(File.expand_path('../../../', __FILE__))
      end
    end
  end
end
