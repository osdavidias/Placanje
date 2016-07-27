<?php
namespace Explorer\Payment\Model;
class Placanje extends \Magento\Payment\Model\Method\AbstractMethod
{
    protected $_code = 'placanje';
    protected $_isOffline = true;
}