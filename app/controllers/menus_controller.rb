class MenusController < ApplicationController
  helper_method :sort_column, :sort_direction
  def index
    @menus = Menu.search(params[:search]).order(sort_column + ' ' + sort_direction)
  end


  def show
    @menu = Menu.find(params[:id])
  end

  def new
  end

  def create
    @menu = Menu.new(menu_params)

    @menu.save
    redirect_to @menu
  end

  private
    def menu_params
      params.require(:menu).permit(:dish, :price)
    end
    def sort_column
      Menu.column_names.include?(params[:sort]) ? params[:sort] : "dish"
    end
    def sort_direction
      %w[asc desc].include?(params[:direction]) ?  params[:direction] : "asc"
    end
end
