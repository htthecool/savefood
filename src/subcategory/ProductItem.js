import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import ProductLink from 'react-storefront/ProductLink'
import { Vbox } from 'react-storefront/Box'
import Rating from 'react-storefront/Rating'
import Image from 'react-storefront/Image'
import { price } from 'react-storefront/format'
import Track from 'react-storefront/Track'

@withStyles(
  theme => ({
    root: {
      listStyle: 'none',
      padding: '10px 0'
    },
    thumb: {
      flex: 2,
      display: 'block',
      marginBottom: '10px',
      '& img': {
        width: '100%'
      }
    },
    link: {
      textDecoration: 'none',
      color: 'inherit'
    },
    price: {
      color: theme.palette.price.main,
      marginTop: '5px'
    },
    reviews: {
      marginTop: '5px'
    },
    reviewCount: {
      marginLeft: '2px'
    },
    info: {
      margin: '0'
    }
  })
)
export default class ProductItem extends Component {
  static propTypes = {
    product: PropTypes.object.isRequired,
    classes: PropTypes.object
  }

  render() {
    const { index, product, classes } = this.props
    console.log(product)
    return (
      <div id={`item-${index}`} className={classes.root}>
        <Track event="productClicked" product={product}>
          <ProductLink prefetch="visible" className={classes.link} product={product}>
            <Vbox alignItems="stretch">
              <div className={classes.thumb}>
                <Image
                  quality={50}
                  lazy={index >= 4 && index < 10}
                  aspectRatio={100}
                  alt="product"
                  src={'/Users/matthiasbachmann/hack/savefood/allen.png'}
                />
              </div>
              <div className={classes.info}>
                <Typography variant="subtitle1" className={classes.name}>
                  {product.Description}
                </Typography>
                <Rating product={product} className={classes.rating} />
                <Typography className={classes.price}>{price(product.price)}</Typography>
              </div>
            </Vbox>
          </ProductLink>
        </Track>
      </div>
    )
  }
}
