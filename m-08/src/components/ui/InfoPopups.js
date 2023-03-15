const sizeing = {padding: "8px", width: "100%", textAlign: "center", marginTop: "8px", borderRadius:"5px"}
const errorColor = {background: "#ffb7d4", color: "#FE0808"}
const successColor = {background: "#d6f7d9", color: "#067f12"}
const infoColor = {background: "#f4f7c1", color: "#000"}

export  function Success({ children }) {
    return (
        <div style={{ ...successColor, ...sizeing  }}>
            {children && children}
            {!children && "Update Successfull"}
        </div>
    );
}
export  function Updating({ children }) {
    return (
        <div style={{...infoColor, ...sizeing  }}>
            {children && children}
            {!children && "Data Updating..."}
        </div>
    );
}
export  function Empty({ children }) {
    return (
        <div style={{...infoColor, ...sizeing  }}>
            {children && children}
            {!children && "On item to Show"}
        </div>
    );
}
export  function Error({ children }) {
    return (
        <div style={{ ...errorColor, ...sizeing  }}>
            {children && children}
            {!children && "Thare was an error"}
        </div>
    );
}
