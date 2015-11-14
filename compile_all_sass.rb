#!/usr/bin/env ruby
# The command line Sass parser.
# Modified into new script by Kevin Nov 13 2015

# THIS_FILE = File.symlink?(__FILE__) ? File.readlink(__FILE__) : __FILE__
require 'sass'
require 'sass/exec'

# Dir["*.sass"]
# Dir["*"].select { |f| File.directory? f }
# Dir["*"].select { |f| f =~ ends_in_sass }

def make_it_sassy(directory)
  ends_in_sass = /.sass$/
  Dir[directory + "/*"].select { |f| File.directory? f }.each do |fi|
    make_it_sassy(fi)
  end
  Dir[directory + "/*"].select { |f| f =~ ends_in_sass }.each do |fi|
    full_name = fi
    puts full_name, full_name[0..-5] + "css"
    opts = Sass::Exec::SassScss.new([full_name, full_name[0..-5] + "css"], :sass)
    opts.parse
  end
end

make_it_sassy "."