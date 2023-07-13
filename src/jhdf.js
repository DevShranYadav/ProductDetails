<div className={classes.ProdutsData}>
            <h1 className={classes.ProductTitle}>{ProductsData.title}</h1>
            <p className={classes.ProductDescription}>{ProductsData.description}</p>
            <h3 className={classes.SectionHeading}>Select Color</h3>
            <div >
              <img className={[classes.ProductImage, classes.SelectedProductImage].join(' ')} src="https://imgur.com/iOeUBV7.png" alt="Black Color"></img>
              <img className={classes.ProductImage} src="https://imgur.com/PTgQlim.png" alt="Red Color"></img>
              <img className={classes.ProductImage} src="https://imgur.com/Mplj1YR.png" alt="Blue Color"></img>
              <img className={classes.ProductImage} src="https://imgur.com/xSIK4M8.png" alt="Purple Color"></img>
            </div>
            <h3 className={classes.SectionHeading}>Features</h3>
            <div className={classes.SectionHeading}>
              <button className={[classes.FeatureItem, classes.SeletedFeatureItem].join('')}>Time</button>
              <button className={[classes.FeatureItem, classes.SeletedFeatureItem].join('')}>Heart Rate</button>
            </div>
          </div>