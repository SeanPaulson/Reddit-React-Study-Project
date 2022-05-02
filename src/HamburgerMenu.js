const HamburgerMenu = (props) => {

  const handleClick = (e) => console.log('clicked');

  return (
    <svg
      onTouchStart={handleClick}
      class="svg-menu-icon "
      viewBox="0 0 20 16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill={props.color}>
        <path d="m19.1961 8.6h-18.08612c-.401914 0-.803828-.3-.803828-.8s.401914-.8.803828-.8h18.08612c.4019 0 .8038.3.8038.8s-.4019.8-.8038.8z"></path>
        <path d="m16.1818 1.6h-12.05742c-.40191 0-.80382-.4-.80382-.8s.40191-.8.80382-.8h12.05742c.4019 0 .8038.3.8038.8s-.4019.8-.8038.8z"></path>
        <path d="m16.1818 15.6h-12.05742c-.40191 0-.80382-.3-.80382-.8s.30143-.8.80382-.8h12.05742c.4019 0 .8038.3.8038.8s-.4019.8-.8038.8z"></path>
      </g>
    </svg>
  );  
};

export default HamburgerMenu;
