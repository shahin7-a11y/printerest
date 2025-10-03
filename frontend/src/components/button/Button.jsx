import './button.css'
function Button({ value, clas}) {
    function buttonclick() {
        window.location.href = "/sign"
    }

    return (
        <div>
            <button
                className={clas}
                type="button"
                onClick={buttonclick}
                style={{
                    height: "40px",
                    width: "70px",
                    // backgroundColor: "red",
                    border: "none ",
                    borderRadius: "7px",
                    padding: "5PX",
                    color: "white",
                    fontWeight: "600"
                }}

            >
                {value}
            </button>
        </div>
    );
}

export { Button };
