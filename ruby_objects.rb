class Calculator
	def initialize
		@x=1
		@y=1
	end

	def numbers = (x, y)
		@x =x
		@y =y
	end

	def add
		@x+y
	end

	def subtract
		@x-@y
	end

	def multiply
		@x*@y
	end

	def devide
		@x/@y
	end

end

class Elevator
	def initialize
		@floor =1
	end

	def up
		@floor++
	end

	def down
		@floor--
	end

	def greet
		puts "hey kiddo! You are on floor #{floor}"
	end
end

el = Elevator.new

el.up
el.up
el.greet

