CarrierWave.configure do |config|

  # Use local storage if in development or test
  if Rails.env.development? || Rails.env.test?
    CarrierWave.configure do |config|
      config.storage = :file
    end
  end

  # Use AWS storage if in production
 if Rails.env.production?
    CarrierWave.configure do |config|
      config.storage = :fog
      config.fog_credentials = {
        :provider               => 'AWS',                             # required
        :aws_access_key_id      => ENV['AWS_ACCESS_KEY_ID'],            # required
        :aws_secret_access_key  => ENV['AWS_SECRET_ACCESS_KEY'],     # required
        :region                 => 'us-east-1'                        # optional, defaults to 'us-east-1'
      }
      config.fog_directory  = ENV['S3_BUCKET_NAME']               # required
    end
  end
end