class Iron{
	constructor(x,y,width,height)
	{
	// assign options to the rubber ball
    var options={
        restitution:0.8,
        friction:0.9,
        density:12
    }

		this.x=x;
		this.y=y;
        this.width=width;
        this.height=height;
		this.body=Bodies.rectangle(this.x, this.y,50,50, options)
		World.add(world, this.body);

		
	}
	display()
	{
			var ironpos=this.body.position;		
			push()
			translate(ironpos.x, ironpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("red");
			fill("red");
			//draw the ellipse here to display the rubber ball
            rect(0,0,this.width,this.height);
			pop()
	}
    
}