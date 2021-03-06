import * as React from 'react';
import { css, getModifier } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Alert/alert';
import accessibleStyles from '@patternfly/react-styles/css/utilities/Accessibility/accessibility';
import { AlertIcon } from './AlertIcon';
import { capitalize } from '../../helpers/util';
import { Omit } from '../../helpers/typeUtils';

export enum AlertVariant {
  success = 'success',
  danger = 'danger',
  warning = 'warning',
  info = 'info'
}

export interface AlertProps
  extends Omit<React.HTMLProps<HTMLDivElement>, 'action' | 'title'> {
  /** Adds Alert variant styles  */
  variant?: 'success' | 'danger' | 'warning' | 'info';
  /** Flag to indicate if the Alert is inline */
  isInline?: boolean;
  /** Title of the Alert  */
  title: React.ReactNode;
  /** Action button to put in the Alert. Should be <AlertActionLink> or <AlertActionCloseButton> */
  action?: React.ReactNode;
  /** Content rendered inside the Alert */
  children?: React.ReactNode;
  /** Additional classes added to the Alert  */
  className?: string;
  /** Adds accessible text to the Alert */
  'aria-label'?: string,
  /** Variant label text for screen readers */
  variantLabel?: string;
};

export const Alert: React.FunctionComponent<AlertProps> = ({
  variant = AlertVariant.info,
  isInline = false,
  variantLabel = `${capitalize(variant)} alert:`,
  'aria-label': ariaLabel = `${capitalize(variant)} Alert`,
  action = null,
  title,
  children = '',
  className = '',
  ...props
}: AlertProps) => {
  const readerTitle = (
    <React.Fragment>
      <span className={css(accessibleStyles.screenReader)}>{variantLabel}</span>
      {title}
    </React.Fragment>
  );

  const customClassName = css(styles.alert, isInline && styles.modifiers.inline, getModifier(styles, variant, styles.modifiers.info), className);

  return (
    <div {...props} className={customClassName} aria-label={ariaLabel}>
      <AlertIcon variant={variant} />
      <h4 className={css(styles.alertTitle)}>{readerTitle}</h4>
      {children && (
        <div className={css(styles.alertDescription)}>
          {children}
        </div>
      )}
      {action && (
        <div className={css(styles.alertAction)}>{React.cloneElement(action as any, { title, variantLabel })}</div>
      )}
    </div>
  );
};
