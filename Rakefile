require 'erb'

desc 'Generate new post'
task :new, [:title] do |t, args|
  template = File.read(File.join(File.dirname(__FILE__),'templates', 'post.erb'))

  title            = args.title
  title_normalized = title.downcase.split.join('-')
  time             = Time.now
  user_name        = `git config user.name`.chop
  permalink        = "#{time.strftime('%Y-%m-%d')}-#{title_normalized}"
  file_name        = "#{permalink}.md"
  file_path        = File.join('_posts', file_name)

  File.open(file_path, 'w+') do |f|
    f.write ERB.new(template).result(binding)
    puts "#{file_path} created"
  end

  if editor = ENV['VISUAL'] || ENV['EDITOR']
    system "#{editor} #{file_path}"
  end
end
