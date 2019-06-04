class Api::GroupsController < ApplicationController
    before_action :require_logged_in!, only:[:create, :update]

    def index
        @groups = Group.all
        render :index
    end

    def create
        @group = Group.new(group_params)
        @group.organizer_id = current_user.id

        if @group.save
            render :show
        else
            render json: @group.errors.full_messages, status: 422
        end

    end

    def show
        @group = Group.find(params[:id])
    end
   
    def update
        @group = Group.find(params[:id])
        if @group.update(group_params)
            render :show 
        else
            render json: @groups.errors.full_messages, status: 422
        end
      
    end

    def destroy
        @group = Group.find(params[:id])

        if @group.destroy
            render :show
        else
            render json: @groups.errors.full_messages, status: 422
        end
    end

    private
    def group_params
        params.require(:group).permit(:title, :description, :location_id, :organizer_id)
    end
end