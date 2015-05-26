class WelcomeController < ApplicationController
  def index
  	@homeland = "California"
  	@countries = ["Iceland","Croatia","New Zealand"]

  	@images = ["iceland1.jpg","newzealand1.jpg","plitvice-lakes-croatia.jpg","sushi-cats-2.jpeg"]

  	@images_hash = {"Iceland" => "iceland1.jpg", "New Zealand" => "newzealand1.jpg","Croatia" => "plitvice-lakes-croatia.jpg", "Sushi Cat!" => "sushi-cats-2.jpeg"}
  end

  def about
  	@color = params[:color]
  	@size = params[:size].to_i
  end

  def contact
    @united_states = {"Capital City" => "Washington, DC", "Favorite City" => "San Diego", "Favorite State" => "Colorado", "Flag Colors" => ["Red","White","Blue"]}
  end

end








