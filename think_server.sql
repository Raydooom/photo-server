/*
 Navicat Premium Data Transfer

 Source Server         : 本地
 Source Server Type    : MySQL
 Source Server Version : 50724
 Source Host           : localhost:3306
 Source Schema         : think_server

 Target Server Type    : MySQL
 Target Server Version : 50724
 File Encoding         : 65001

 Date: 01/03/2019 18:46:55
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for about
-- ----------------------------
DROP TABLE IF EXISTS `about`;
CREATE TABLE `about` (
  `key` char(125) COLLATE utf8mb4_bin NOT NULL,
  `title` char(125) COLLATE utf8mb4_bin NOT NULL DEFAULT '',
  `content` varchar(1024) COLLATE utf8mb4_bin DEFAULT '',
  PRIMARY KEY (`key`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

-- ----------------------------
-- Table structure for admin_user
-- ----------------------------
DROP TABLE IF EXISTS `admin_user`;
CREATE TABLE `admin_user` (
  `id` int(1) unsigned zerofill NOT NULL AUTO_INCREMENT,
  `account` varchar(255) COLLATE utf8mb4_bin DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_bin DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

-- ----------------------------
-- Table structure for article_comment
-- ----------------------------
DROP TABLE IF EXISTS `article_comment`;
CREATE TABLE `article_comment` (
  `id` int(6) NOT NULL AUTO_INCREMENT,
  `article_id` char(6) COLLATE utf8mb4_bin NOT NULL DEFAULT '0',
  `comment_user_id` int(6) NOT NULL,
  `comment_text` varchar(1024) COLLATE utf8mb4_bin DEFAULT '',
  `create_date` char(24) COLLATE utf8mb4_bin DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

-- ----------------------------
-- Table structure for article_kind_list
-- ----------------------------
DROP TABLE IF EXISTS `article_kind_list`;
CREATE TABLE `article_kind_list` (
  `id` int(2) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_bin DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

-- ----------------------------
-- Table structure for article_list
-- ----------------------------
DROP TABLE IF EXISTS `article_list`;
CREATE TABLE `article_list` (
  `id` int(6) unsigned NOT NULL AUTO_INCREMENT,
  `article_title` varchar(255) COLLATE utf8mb4_bin DEFAULT NULL,
  `cover_img` varchar(255) COLLATE utf8mb4_bin DEFAULT NULL,
  `kind_id` int(6) DEFAULT NULL,
  `description` varchar(255) COLLATE utf8mb4_bin DEFAULT NULL,
  `content` text COLLATE utf8mb4_bin,
  `home_show` int(1) DEFAULT '0',
  `views` int(6) DEFAULT '0',
  `praises` varchar(2048) COLLATE utf8mb4_bin DEFAULT '',
  `shares` int(6) DEFAULT '0',
  `comments` int(6) DEFAULT '0',
  `create_date` char(24) COLLATE utf8mb4_bin DEFAULT NULL,
  `update_date` char(24) COLLATE utf8mb4_bin DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

-- ----------------------------
-- Table structure for daily
-- ----------------------------
DROP TABLE IF EXISTS `daily`;
CREATE TABLE `daily` (
  `id` int(6) NOT NULL AUTO_INCREMENT,
  `img_url` char(128) NOT NULL DEFAULT '',
  `content` char(128) NOT NULL DEFAULT '',
  `from` char(64) NOT NULL DEFAULT '',
  `day` char(2) DEFAULT '00',
  `month` char(2) DEFAULT '00',
  `year` char(4) DEFAULT '',
  `create_date` char(32) DEFAULT '',
  `praises` int(6) NOT NULL DEFAULT '0',
  `download` int(6) NOT NULL DEFAULT '0',
  `update_date` char(32) DEFAULT '',
  `sort` int(9) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(6) NOT NULL AUTO_INCREMENT,
  `user_name` char(64) COLLATE utf8mb4_bin DEFAULT NULL,
  `gender` int(1) DEFAULT '0',
  `avatar` char(255) COLLATE utf8mb4_bin DEFAULT NULL,
  `province` char(32) COLLATE utf8mb4_bin DEFAULT NULL,
  `city` char(32) COLLATE utf8mb4_bin DEFAULT NULL,
  `create_date` char(32) COLLATE utf8mb4_bin DEFAULT NULL,
  `openid` char(64) COLLATE utf8mb4_bin NOT NULL DEFAULT '',
  `country` char(32) COLLATE utf8mb4_bin DEFAULT '',
  `praise_article` varchar(1024) COLLATE utf8mb4_bin DEFAULT '',
  `comment_article` varchar(1024) COLLATE utf8mb4_bin DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=40 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

-- ----------------------------
-- Table structure for visitTimes
-- ----------------------------
DROP TABLE IF EXISTS `visitTimes`;
CREATE TABLE `visitTimes` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `day` varchar(255) COLLATE utf8mb4_bin DEFAULT NULL,
  `times` int(5) DEFAULT NULL,
  `users_count` int(5) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=42 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

SET FOREIGN_KEY_CHECKS = 1;
