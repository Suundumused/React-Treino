import { useState } from 'react';
import { Dropdown } from 'react-bootstrap';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { BrowserRouter as Router, Link, useNavigate } from 'react-router-dom';


export default function PublicHeader() {
	const navigation = useNavigate();
	const [searchInputValue, setSearchInputValue] = useState<string>("");

	function search(event: React.SubmitEvent<HTMLFormElement>): void {
		event.preventDefault();

		try{
			navigation(`/items/get/${Number(searchInputValue.replaceAll(" ", ""))}`);
		}
		catch{
			setSearchInputValue("The input search must be numeric");
		}
	}

	return (
		<>
			<nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
				<div className="container-fluid">
					<Link to="/" className="navbar-brand" >Navbar</Link>
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarColor02">
						<ul className="navbar-nav me-auto">
							<li className="nav-item">
								<Link to="/" className="nav-link active">Home
									<span className="visually-hidden">(current)</span>
								</Link>
							</li>
							<Dropdown className="nav-item dropdown">
								<Dropdown.Toggle className="nav-link dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Items</Dropdown.Toggle>
								<Dropdown.Menu className="dropdown-menu">
									<Link to="/items/list" className="dropdown-item" >List</Link>
									<Link to="/items/add" className="dropdown-item" >Add</Link>
								</Dropdown.Menu>
							</Dropdown>
							<li className="nav-item">
								<Link to="/about" className="nav-link" >About</Link>
							</li>
						</ul>
						<form className="d-flex" onSubmit={(event) => search(event)}>
							<input value={searchInputValue} onChange={(e) => setSearchInputValue(e.target.value)} className="form-control me-sm-2" type="number" step={1} min={0} placeholder="Search" />
							<button id="customButton1" className="btn btn-secondary my-2 my-sm-0" type="submit">Search by Id</button>
						</form>
					</div>
				</div>
			</nav>
		</>
	);
}