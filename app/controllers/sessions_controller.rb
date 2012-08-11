class SessionsController < ApplicationController

  before_filter :get_event

  def get_event
    @event = Event.find(params[:event_id])
  end

  # GET /sessions
  # GET /sessions.json
  def index
    @sessions = @event.sessions

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @sessions }
    end
  end

  # GET /sessions/1
  # GET /sessions/1.json
  def show
    @session = @event.sessions.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @session }
    end
  end

  # GET /sessions/new
  # GET /sessions/new.json
  def new
    @session = Session.new

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @session }
    end
  end

  # GET /sessions/1/edit
  def edit
    @session = @event.sessions.find(params[:id])
  end

  # POST /sessions
  # POST /sessions.json
  def create
    @session = @event.sessions.new(params[:session])

    respond_to do |format|
      if @session.save
        format.html { redirect_to [@event, @session], notice: 'Session was successfully created.' }
        format.json { render json: [@event, @session], status: :created, location: [@event, @session] }
      else
        format.html { render action: "new" }
        format.json { render json: @session.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /sessions/1
  # PUT /sessions/1.json
  def update
    @session = @event.sessions.find(params[:id])

    respond_to do |format|
      if @session.update_attributes(params[:session])
        format.html { redirect_to [@event, @session], notice: 'Session was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @session.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /sessions/1
  # DELETE /sessions/1.json
  def destroy

    @session = @event.sessions.find(params[:id])

    #when destroying the last session, also destroy the related event
    #i know i can refactor this
    # event = Event.find(@session.event_id)
    # if event.sessions.count == 1
    #   event.destroy
    # end
    
    @session.destroy

    respond_to do |format|
      format.html { redirect_to event_sessions_url }
      format.json { head :no_content }
    end
  end
end
