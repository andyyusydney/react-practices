1. How to improve the performance of a React App?
	- Lazy Loading, webpack dynamic loading
	   React.lazy gets a callback which returns a Promise, and returns a renderable component.

		Webpacks dynamic imports returns a Promise which will be resolved when the chunk is loaded, therefore, you can't directly render it.

2. React life cycle methods and how functional hooks are mapped to those methods

3. Logical operators || &&
	OR ( | | ) operator - If the first value is truthy, then the first value is returned. Otherwise, always the second value gets returned.

	AND ( && ) operator - If both the values are truthy, always the second value is returned. If the first value is falsy then the first value is returned or if the second value is falsy then the second value is returned.

	x | | y    // Returns 220 since the first value is truthy
        
	x | | z   // Returns 220 since the first value is truthy
			
	x && y    // Returns "Hello" since both the values are truthy
			
	y && z   // Returns undefined since the second value is falsy

4. Conditional Rendering
	if --------------
	if (isLoggedIn) {
		return <UserGreeting />;
	}
	return <GuestGreeting />;
	
	if else --------------
	if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );

	Inline Logical && Operator ------------
	return (
		<div>
			<h1>Hello!</h1>
		{unreadMessages.length > 0 &&
			<h2>
			You have {unreadMessages.length} unread messages.
			</h2>
		}
		</div>
	);

	Ternary Operator----------------
	return (
		<div>
		The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.
		</div>
	);

	Preventing Component from Rendering---------
	function WarningBanner(props) {
		if (!props.warn) {
			return null;
		}

		return (
			<div className="warning">
			Warning!
			</div>
		);
	}
	--------------------