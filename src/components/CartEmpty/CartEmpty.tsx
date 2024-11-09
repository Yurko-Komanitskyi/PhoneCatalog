import styles from './CartEmpty.module.scss';

export const CartEmpty = () => {
  return (
    <div className={styles.cartEmpty}>
      <div className={styles.cartEmpty__contain}>
        <h1>Your cart is empty</h1>
      </div>
      <img
        src="/img/cart-is-empty.png"
        alt="Not found"
        className={styles.cartEmpty__img}
      />
    </div>
  );
};
