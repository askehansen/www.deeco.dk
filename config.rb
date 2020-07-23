# Activate and configure extensions
# https://middlemanapp.com/advanced/configuration/#configuring-extensions

activate :autoprefixer do |prefix|
  prefix.browsers = "last 2 versions"
end

# Layouts
# https://middlemanapp.com/basics/layouts/

# Per-page layout changes
page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

# With alternative layout
# page '/path/to/file.html', layout: 'other_layout'

# Proxy pages
# https://middlemanapp.com/advanced/dynamic-pages/

# proxy(
#   '/this-page-has-no-template.html',
#   '/template-file.html',
#   locals: {
#     which_fake_page: 'Rendering a fake page with a local variable'
#   },
# )

# Helpers
# Methods defined in the helpers block are available in templates
# https://middlemanapp.com/basics/helper-methods/

helpers do
  def array_in_groups_of(array, size)
    array.each_slice(array.length.next / size) do |group|
      yield(group)
    end
  end
end

activate :i18n, :mount_at_root => :da

activate :external_pipeline, {
  name: :webpack,
  command: build? ? './node_modules/webpack/bin/webpack.js --bail --mode=production' : './node_modules/webpack/bin/webpack.js --watch -d --color',
  source: ".tmp/dist",
  latency: 1
}

# Build-specific configuration
# https://middlemanapp.com/advanced/configuration/#environment-specific-settings
configure :build do
  activate :asset_hash
  activate :gzip
end
